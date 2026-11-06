import { Spark } from "@/components/Icons";

const items = [
  "Computer Science Education",
  "Compiler Principles",
  "Programming Fundamentals",
  "M.Sc. Computer Science & IT",
  "UGC-NET 2012",
  "Teaching & Mentorship",
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) =>
          items.map((item, index) => (
            <span className="marquee-item" key={`${copy}-${item}`}>
              <span>{item}</span>
              <Spark className={index % 2 === 0 ? "" : "marquee-star-alt"} />
            </span>
          )),
        )}
      </div>
    </div>
  );
}
