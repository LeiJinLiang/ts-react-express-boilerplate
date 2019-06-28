import * as React from "react";

interface item {
  item: any;
  idx: number;
}
interface Props {
  data: item[];
}

export const RemoteView = (props: any) => {
  const { data } = props;
  return (
    <>
      {data.map((item: any, idx: any) => (
        <li key={idx}>
          <strong>{item.name}</strong>
        </li>
      ))}
    </>
  );
};
