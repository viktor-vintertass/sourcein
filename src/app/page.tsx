import Image from "next/image";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-3 row-start-2 items-center">
        <Image 
          src={`${basePath}/logo_transparent.png`}
          alt="Company logotype of Sourcein"
          priority={true}
          width={397}
          height={188}
          style={{
            height: "auto",
            width: "200px",
          }}
        /> 
        <h1 className="felx justify-center" style={{ fontSize: "2.3rem", fontFamily: "Montserrat" }}>Sourcein</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2"
          href="tel:+46707585307"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${basePath}/phone.svg`}
            alt="File icon"
            width={18}
            height={18}
          />
          Phone
        </a>
        <a
          className="flex items-center gap-2"
          href="http://www.linkedin.com/in/viktor-vintertass"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${basePath}/linkedin.svg`}
            alt="Window icon"
            width={18}
            height={18}
          />
          LinkedIn
           </a>
        <a
          className="flex items-center gap-2"
          href="mailto:viktor.vintertass@sourcein.se"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${basePath}/email.svg`}
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
