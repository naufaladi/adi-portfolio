import Image from "next/image";
import { ThemeToggle } from "../components/theme-toggle";
import { dummyJobwatch, ProjectBox } from "../components/project-box";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <h1>Insert hook here (like "hi i'm bla bla")</h1>
      </div>
      <div>my qualifications</div>
      <div>
        <ProjectBox data={dummyJobwatch} />
      </div>
    </main>
  );
}
