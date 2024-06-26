"use client";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ymHuTH4Vv6i
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Badge} from "@/components/ui/badge"
import {Card} from "@/components/ui/card"
import {gql, useQuery} from "@apollo/client";

const GET_ITEMS = gql`
query getItems {
  item {
    id
    name
    desc
    size_options
    color_options
    image
    price
  }
}
`;

export function ItemComponent() {
  const {data} = useQuery(GET_ITEMS);
  console.log("data: ", data);
  const items = data?.item;
  if (!items) {
    return null;
  }
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item: any) => <Card key={item.id} className="p-4">
        <img
          alt="Product test"
          className="w-full h-auto mb-2"
          height="150"
          // src={item.image}
          src="public/placeholder.svg?height=150&width=150"
          style={{
            aspectRatio: "150/150",
            objectFit: "cover",
          }}
          width="150"
        />
        <div className="flex justify-between items-start mb-1">
          <div>
            <p className="text-sm text-gray-500">스웨터</p>
            <p className="text-xs text-gray-400">{item.name}</p>
          </div>
          <HeartIcon className="h-4 w-4 text-gray-400"/>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-lg font-bold">{item.price}원</p>
            <Badge variant="secondary">40%</Badge>
          </div>
          <ShoppingBagIcon className="h-6 w-6 text-gray-400"/>
        </div>
      </Card>)}
    </div>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  )
}


function ShoppingBagIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
      <path d="M3 6h18"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  )
}


