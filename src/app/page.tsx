import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-[100dvh]">
      <main className="flex flex-col gap-3 row-start-2 items-center justify-center">
        <Image 
          src="/logo_transparent.png"
          alt="Company logotype of Sourcein"
          className="noselect-without-pointer"
          priority={true}
          width={397}
          height={188}
          style={{
            height: "auto",
            width: "75px",
          }}
        /> 
        <h1 className="felx justify-center noselect-without-pointer" style={{ fontSize: "2.3rem", fontFamily: "Montserrat" }}>Sourcein</h1>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center footer-icons">
        <a
          className="flex items-center gap-2 noselect"
          href="tel:+46707585307"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="noselect"
            src="/phone.svg"
            alt="File icon"
            width={18}
            height={18}
          />
          Phone
        </a>
        <a
          className="flex items-center gap-2 noselect"
          href="http://www.linkedin.com/in/viktor-vintertass"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="noselect"
            src="/linkedin.svg"
            alt="Window icon"
            width={18}
            height={18}
          />
          LinkedIn
           </a>
        <a
          className="flex items-center gap-2 noselect"
          href="mailto:viktor.vintertass@sourcein.se?subject=Contact%20via%20website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="noselect"
            src="/email.svg"
            alt="Windowd icon"
            width={18}
            height={18}
          />
          Email
        </a>
      </footer>
    </div>
  );
}
