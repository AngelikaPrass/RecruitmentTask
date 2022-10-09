import React, {useEffect, useState} from "react";

interface PaginationProps {
    page: number;
    fetchFunction: (page: number) => Promise<any>;
    setDisplay: (data: any) => void;
    handlePageChange: (page: number) => void;
    children: React.ReactNode;

}

const Pagination = (props: PaginationProps) => {
    const {page, fetchFunction, setDisplay, handlePageChange, children} = props;
    const [loading, setLoading] = useState<boolean>(false);
    const [lastPage, setLastPage] = useState<number>(1);
    useEffect(() => {
        setLoading(true);
        fetchFunction(page).then((res: any) => {
            setLastPage(res.meta.pagination.pages);
            setDisplay(res.data);
            setLoading(false);
        });
    }, [page]);

    return (
        <div>
            {loading ? <div>Loading...</div> : <div> {children} </div>}
                <p> current page: {page}</p>
                <button onClick={() => handlePageChange(page - 1)} disabled={page <= 1}> Previous page</button>
                <button onClick={() => handlePageChange(page + 1)} disabled={page >= lastPage}> Next page</button>
        </div>
    );
}
export default Pagination;