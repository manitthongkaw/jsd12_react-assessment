import Navbar from "../components/Navbar";

export default function Owner() {

  return (
    <>
      <Navbar />
      <section id="owner" className="flex flex-col gap-8 max-w-md w-full mx-auto">
        <h1 className="text-3xl font-semibold text-center">14 Manit (Arm/อาม)</h1>
        <img className="max-w-3xs w-full rounded-2xl mx-auto" src="/src/assets/images/avatar.jpg" />
        <h2 className="text-lg font-bold">Short Biography:</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias officia delectus in consequatur dignissimos deserunt. Quia ipsa rerum corporis iusto saepe deserunt libero! Deleniti recusandae corporis asperiores quidem architecto!</p>
      </section>
    </>
  );

};