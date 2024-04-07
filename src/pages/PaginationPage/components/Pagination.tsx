import { getPaginationRange } from "../../../utils";

interface PaginationProps {
    total: number;
    page: number;
    limit: number;
    sibbling: number;
    pageChange: (page: string | number) => void;
}

const Pagination = (props: PaginationProps) => {
    const array = getPaginationRange(props.total, props.page, props.limit, props.sibbling);

    return (
        <ul className="pagination pagination-md justify-content-end">
            <li className="page-item">
                <span className="page-link" onClick={() => props.pageChange("&laquo;")}>
                    &laquo;
                </span>
            </li>
            <li className="page-item">
                <span className="page-link" onClick={() => props.pageChange("&lsaquo;")}>
                    &lsaquo;
                </span>
            </li>
            {array.map((item) => (
                <li key={item} className={`page-item ${item === props.page ? `active` : ``}`}>
                    <span className="page-link" onClick={() => props.pageChange(item)}>
                        {item}
                    </span>
                </li>
            ))}
            <li className="page-item">
                <span className="page-link" onClick={() => props.pageChange("&rsaquo;")}>
                    &rsaquo;
                </span>
            </li>
            <li className="page-item">
                <span className="page-link" onClick={() => props.pageChange("&raquo;")}>
                    &raquo;
                </span>
            </li>
        </ul>
    );
};

export default Pagination;
