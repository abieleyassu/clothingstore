import Link from "next/link";

function Navigation() {
  return (
    <nav className="flex  items-center gap-10">
      {[
        { name: "Home" },
        { name: "Shop" },
        { name: "Categories" },
        { name: "About Us" },
        { name: "Contact Us" },
      ].map((item, index: number) => {
        return (
          <Link href="#" className="items-center text-lg font-serif">
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navigation;
