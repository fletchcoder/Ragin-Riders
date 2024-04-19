import { Product } from "@/lib/types/Product";
import Link from "next/link";

export default function SearchResults({
	isLoading,
	data,
}: {
	isLoading: boolean;
	data: Product[];
}) {
	return (
		<div>
			{isLoading && <div>Loading...</div>}
			{data &&
				data.map((item) => (
					<div key={item.id}>
						<Link href={`/shop/${item.slug}`}>{item.name}</Link>
					</div>
				))}
		</div>
	);
}
