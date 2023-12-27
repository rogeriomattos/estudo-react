"use client";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div>
      <Counter initCounter={349} />
      <Counter initCounter={349} />
      <Counter initCounter={349} />
    </div>
  );
}
