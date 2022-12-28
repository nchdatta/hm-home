import { useEffect, useState } from "react";

const usePages = (size) => {
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        fetch('http://localhost:5000/user//total-user')
            .then(res => res.json())
            .then(data => {
                const total = Math.ceil(data / size);
                setTotalPages(total)
            })
    }, [size])

    return [totalPages];
};

export default usePages;