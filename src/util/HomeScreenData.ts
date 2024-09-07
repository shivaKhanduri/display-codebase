export interface BoxData {
  heading: string;
  className?: string;
  isAdvantage?: boolean;
  imageUrl?: string;
}
// Array of box data for rendering boxes dynamically
export const boxDataAdv: BoxData[] = [
  // Advantages start here
  {
    heading: "Exam Simulation",
    isAdvantage: true,
  },
  {
    heading: "Worksheet Builder",
    isAdvantage: true,
  },
  {
    heading: "Enhancing Learning",
    isAdvantage: true,
  },
  {
    heading: "Self-Evaluation",
    isAdvantage: true,
  },
  {
    heading: "Varied Question Banks",
    isAdvantage: true,
  },
  {
    heading: "Focused Prep",
    isAdvantage: true,
  },
];
import CRYPTO from "../assets/crypto3.png";
import COA from "../assets/cao2.png";
import EPH from "../assets/physics2.png";
import MAM from "../assets/micro.png";
import SE from "../assets/software.png";
import OS from "../assets/os2.png";
import EMB from "../assets/cao2.png";
import DAA from "../assets/daa.png";
import ISM from "../assets/ism2.png";
import ISAA from "../assets/isa.png";
import CN from "../assets/cn.png";
import CD from "../assets/compiler.png";
import AI from "../assets/ai.png";
import DBMS from "../assets/dbms.png";
import DSA from "../assets/dsa.png";
import DMGT from "../assets/cao2.png";
import DSD from "../assets/dsd2.png";
import TOC from "../assets/toc.png";
import PS from "../assets/ps.png";
import CVLA from "../assets/complex2.png";

export const boxDataReg: BoxData[] = [
  {
    heading: " Cryptography",
    className: "box1",
    isAdvantage: false,
    imageUrl: CRYPTO,
  },
  {
    heading: "Computer Architecture",
    className: "box2",
    isAdvantage: false,
    imageUrl: COA,
  },
  {
    heading: "Engineering Physics",
    className: "box3",
    isAdvantage: false,
    imageUrl: EPH,
  },
  {
    heading: "Microcontroller and Microprocessors",
    className: "box3",
    isAdvantage: false,
    imageUrl: MAM,
  },
  {
    heading: "Software Engineering",
    className: "box1",
    isAdvantage: false,
    imageUrl: SE,
  },
  {
    heading: "Operating Systems",
    className: "box2",
    isAdvantage: false,
    imageUrl: OS,
  },
  {
    heading: "Embedded Systems",
    className: "box2",
    isAdvantage: false,
    imageUrl: EMB,
  },
  {
    heading: "Design and Analysis of Algorithms",
    className: "box3",
    isAdvantage: false,
    imageUrl: DAA,
  },
  {
    heading: "Information Security Management",
    className: "box3",
    isAdvantage: false,
    imageUrl: ISM,
  },
  {
    heading: "Information Security Analysis and Audit",
    className: "box1",
    isAdvantage: false,
    imageUrl: ISAA,
  },
  {
    heading: "Computer Networks",
    className: "box2",
    isAdvantage: false,
    imageUrl: CN,
  },
  {
    heading: "Computer architecture",
    className: "box2",
    isAdvantage: false,
    imageUrl: DMGT,
  },
  {
    heading: "Compiler Design",
    className: "box3",
    isAdvantage: false,
    imageUrl: CD,
  },
  {
    heading: "Artificial Intelligence",
    className: "box3",
    isAdvantage: false,
    imageUrl: AI,
  },
  {
    heading: "Database Systems",
    className: "box1",
    isAdvantage: false,
    imageUrl: DBMS,
  },
  {
    heading: "Data Structures and Algorithms",
    className: "box2",
    isAdvantage: false,
    imageUrl: DSA,
  },
  {
    heading: "Discrete Mathematics and Graph Theory",
    className: "box2",
    isAdvantage: false,
    imageUrl: DMGT,
  },
  {
    heading: "Digital Systems Design",
    className: "box3",
    isAdvantage: false,
    imageUrl: DSD,
  },
  {
    heading: "Theory of computation",
    className: "box3",
    isAdvantage: false,
    imageUrl: TOC,
  },
  {
    heading: "Probability and Statistics",
    className: "box1",
    isAdvantage: false,
    imageUrl: PS,
  },
  {
    heading: "Complex Variables and Linear Algebra",
    className: "box2",
    isAdvantage: false,
    imageUrl: CVLA,
  },
];
