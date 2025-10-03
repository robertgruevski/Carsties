"use client";

import { Pagination } from "flowbite-react";

type Props = {
	currentPage: number;
	pageCount: number;
	pageChanged: (page: number) => void;
};

export default function AppPagination({
	currentPage,
	pageCount,
	pageChanged,
}: Props) {
	return (
		<Pagination
			currentPage={currentPage}
			onPageChange={(e) => pageChanged(e)}
			totalPages={pageCount === 0 ? 1 : pageCount}
			layout="pagination"
			showIcons={true}
			className="text-blue-500 mb-5"
		/>
	);
}
