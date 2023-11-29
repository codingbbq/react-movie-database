import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | React Movie Database`;
    });
    return null;
}

export default useTitle;