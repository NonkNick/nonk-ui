export interface NkPaginationProps {
    currentPage: number;
    totalPages: number;
    maxVisible?: number;
    showPrevNext?: boolean;
}

export interface NkPaginationEmits {
    (e: 'update:currentPage', page: number): void;
    (e: 'pageChange', page: number): void;
}