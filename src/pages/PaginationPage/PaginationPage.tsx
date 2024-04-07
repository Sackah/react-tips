import { useState } from "react";
import { getUsers, totalUsers } from "../../utils";
import Pagination from "./components/Pagination";
import Table from "./components/Table";

const PaginationPage = () => {
    const [page, setPage] = useState(9);
    const [limit] = useState(1);

    const totalPages = Math.ceil(totalUsers() / limit);

    const handlePageChange = (value: string | number) => {
        switch (value) {
            case "&laquo;":
                setPage(1);
                break;
            case "... ":
                setPage(1);
                break;
            case "&lsaquo;":
                if (page !== 1) setPage(page - 1);
                break;
            case "&rsaquo;":
                if (page !== totalPages) setPage(page + 1);
                break;
            case " ...":
                setPage(totalPages);
                break;
            case "&raquo;":
                setPage(totalPages);
                break;
            default:
                typeof value === "number" && setPage(value);
                break;
        }
    };

    return (
        <div className="container">
            <Table users={getUsers(page, limit)} />
            <Pagination total={totalPages} page={page} limit={limit} sibbling={1} pageChange={handlePageChange} />
        </div>
    );
};

export default PaginationPage;
