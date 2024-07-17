import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface IPaginationProps {
  next: string;
  previous: string;
  count: number;
  numberOfPages: number;
}
export default function PaginationComponent({
  next,
  previous,
}: IPaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        {previous && (
          <PaginationItem>
            <PaginationPrevious href={`${previous}`} />
          </PaginationItem>
        )}
        {next && (
          <PaginationItem>
            <PaginationNext href={`${next}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
