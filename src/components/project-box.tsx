"use client";

export function ProjectBox() {
  return;
}

export type Project = {
  id: string;
  title: string;
  desc: string;
  thumbnailUrl: string;
  techs: Tech["id"][];
};

export type Tech = {
  id: string;
  title: string;
};

export const dummyTechs: Tech[] = [
  { id: "1", title: "GCP Cloud Services" },
  { id: "5", title: "Google Application Integration" },
  { id: "6", title: "Firestore" },
  { id: "7", title: "BigQuery" },
];

export const dummyJobwatch: Project = {
  id: crypto.randomUUID(),
  techs: ["1", "5", "6", "7"],
  thumbnailUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTM3lDWV2voK36xDk4ltunBvYgh_sYgG4Yg&s",
  title: "PTSG Job Systems Integration",
  desc: `As part of the PTSG Group and as an initiative to streamline operation, NSS (Nationwide Specialist Services) has decided to introduce an automated integration workflow between their CRM system, JobWatch, with their client’s (B&Q and Sainsbury’s) system, Verisae, which processes was done manually until now. 
    Aliz proposed to use, among other GCP services, Application Integration to build such integration flow which helps PTSG by automating their Job management operation, saving time, eliminating human-errors, and allowing operators to focus on doing their work.`,
};
