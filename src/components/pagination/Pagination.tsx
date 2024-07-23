import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useFormContext } from "react-hook-form";

interface IPaginationProps {
  totalCount: number;
  page: number;
}
export default function PaginationComponent({
  totalCount,
  page,
}: IPaginationProps) {
  const { getValues } = useFormContext();
  const searchParam = getValues("q");
  const isNextActive = 20 * page < totalCount;
  const isPreviousActive = 20 * (page - 1) !== 0;
  const previousPage = `cards?q=${searchParam}*&page=${page - 1}&pageSize=20`;
  const nextPage = `cards?q=${searchParam}*&page=${page + 1}&pageSize=20`;

  return (
    <div>
      <Pagination className="text-white ">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={previousPage}
              className={
                isPreviousActive ? undefined : "pointer-events-none opacity-50"
              }
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              href={nextPage}
              className={
                isNextActive ? undefined : "pointer-events-none opacity-50"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
