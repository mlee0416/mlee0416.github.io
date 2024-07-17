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
    <div>
      <Pagination className="text-white ">
        <PaginationContent className="bg-cyan-800 flex justify-between w-80">
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
    </div>
  );
}
