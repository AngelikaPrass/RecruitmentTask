import React, {useEffect, useState} from "react";

interface PaginationProps {
    page: number;
    fetchFunction: (page: number) => Promise<any>;
    setDisplay: (data: any) => void;
    handlePageChange: (page: number) => void;
    children: React.ReactNode;

}
// a component to handle pagination of all data (users, posts, todos)

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
            <div className="grid mt-5 justify-center py-2 pb-8">
                <p className="text-md font-semibold text-center"> current page: {page}</p>
                <div className="inline-flex mt-2">
                    <button onClick={() => handlePageChange(page - 1)} disabled={page <= 1}
                            className="bg-sky-400 hover:bg-sky-500 cursor-pointer text-gray-50 font-bold py-2 px-4 rounded-l mr-1">
                        Previous page
                    </button>
                    <button onClick={() => handlePageChange(page + 1)} disabled={page >= lastPage}
                            className="bg-sky-400 hover:bg-sky-500 cursor-pointer text-gray-50 font-bold py-2 px-4 rounded-r">
                        Next page
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Pagination;