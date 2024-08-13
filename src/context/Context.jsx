import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {


    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultdata] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultdata(prev => prev + nextWord);
        }, 75 * index)
    }
    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }

    // const onSent = async () => {
    //     setResultdata("");
    //     setLoading(true);
    //     setShowResult(true);
    //     setRecentPrompt(input);
    //     const response = await run(input)
    //     let responseArray = response.split("**");
    //     let newResponse;
    //     for (let i = 0; i < responseArray.length; i++) {
    //         if (i === 0 || i % 2 !== 1) {
    //             newResponse += responseArray[i];
    //         }
    //         else {
    //             newResponse += "<b>" + responseArray[i] + "</b>"
    //         }
    //     }

    //     let newResponse2 = newResponse.split("*").join("</br>")
    //     let newResponseArray = newResponse2.split(" ");
    //     for (let i = 0; i < newResponseArray.length; i++) {
    //         const nextWord = newResponseArray[i];
    //         delayPara(i,nextWord+" ");
    //     }
    //     setLoading(false);
    //     setInput("");
    // }
    const onSent = async (prompt) => {
        setResultdata("");
        setInput("");
        setLoading(true);
        setShowResult(true);
        let response;
        if (prompt !== undefined) {

            response = await run(prompt);
            setRecentPrompt(prompt);
        }
        else {
            setPrevPrompts(prev => [...prev, input]);
            setRecentPrompt(input);
            response = await run(input);
        }

        let formattedResponse = response
            .split("**")
            .map((segment, index) => index % 2 === 1 ? `<b>${segment}</b>` : segment)
            .join("");


        formattedResponse = formattedResponse

            .replace(/(\n\d+\.\s+)/g, "<br>$1")  // For numbered lists (e.g., "1. ", "2. ")
            .replace(/(\n\*\s+)/g, "<br>$1");   // For bullet points (e.g., "* ")



        let responseWords = formattedResponse.split(" ");


        responseWords.forEach((word, index) => {
            delayPara(index, word + " ");
        });



        setLoading(false);

    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;

// .replace(/(\n\d+\.\s+)/g,"<br><ol>")  // For numbered lists (e.g., "1. ", "2. ")
// .replace(/(\n\*\s+)/g, "<br><ul>");   // For bullet points (e.g., "* ")