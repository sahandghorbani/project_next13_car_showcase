'use client'
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const routerHanader = () => {
    const queryParams = new URLSearchParams({
      company_name: "abc",
      email: "abc",
      phone_no: "abc",
      pre_register: "true",
    }).toString();

    router.push(`?${queryParams}`);
  };
  return (
    <header className="w-full absolute z-10">
      <nav className="max-width flex-between padding-x padding-y bg-transparent">
        <Link href="/" className="flex-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
        <button onClick={routerHanader}>click me</button>
      </nav>
    </header>
  );
};

export default NavBar;
