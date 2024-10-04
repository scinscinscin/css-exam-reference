import Layout from "@/components/Layout";
import styles from "./index.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { Banner } from "@/components/Banner";

const TRACK_LIST = [
  {
    name: "Data Science",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Core Science",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Game Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const COURSES = {
  "Data Science": [
    { name: "Data Warehousing", code: "CS ELEC 1C" },
    { name: "Machine Learning", code: "CS ELEC 2C" },
    { name: "Data Analysis and Visualization", code: "CS ELEC 3C" },
    { name: "Data Mining", code: "CS ELEC 4C" },
  ],
  "Core Science": [
    { name: "Advanced Intelligence Systems", code: "CS ELEC 1A" },
    { name: "Compiler Design", code: "CS ELEC 2A" },
    { name: "Natural Language Processing", code: "CS ELEC 3A" },
    { name: "Empathic Computing", code: "CS ELEC 4A" },
  ],

  "Game Development": [
    { name: "Game Theory and Design", code: "CS ELEC 1B" },
    { name: "Game Programming I", code: "CS ELEC 2B" },
    { name: "Game Programming II", code: "CS ELEC 3B" },
    { name: "Game Production", code: "CS ELEC 4B" },
  ],
} as const;

const Desalgo = { name: "Design and Analysis of Algorithms", code: "CS2605" };
const AutoEye = { name: "Theory of Automata", code: "CS2606" };

const POSTS = [
  { title: "New Year's Day", daysAgo: "2 days ago" },
  { title: "Christmas", daysAgo: "8 days ago" },
  { title: "New Year's Eve", daysAgo: "5 days ago" },
  { title: "Valentine's Day", daysAgo: "1 day ago" },
  { title: "Halloween", daysAgo: "9 days ago" },
  { title: "Easter", daysAgo: "7 days ago" },
  { title: "Mother's Day", daysAgo: "6 days ago" },
  { title: "Father's Day", daysAgo: "4 days ago" },
  { title: "Independence Day", daysAgo: "3 days ago" },
  { title: "Labor Day", daysAgo: "2 days ago" },
  { title: "Thanksgiving", daysAgo: "1 day ago" },
  { title: "Vuja De", daysAgo: "1 day ago" },
  { title: "OlympiCSS", daysAgo: "1 day ago" },
  { title: "Women in Tech", daysAgo: "1 day ago" },
  { title: "CS Night", daysAgo: "1 day ago" },
  { title: "Codesprint", daysAgo: "1 day ago" },
];

export default function Home() {
  const [selected, setSelected] = useState<keyof typeof COURSES>("Data Science");
  const courses = [...COURSES[selected], Desalgo, AutoEye];
  const [currentPage, setCurrentPage] = useState(0);

  const postControllerRef = useRef<{ currentPage: number; timeoutId: null | NodeJS.Timeout; start: () => void | null }>(
    {
      currentPage: 0,
      timeoutId: null,
      start: () => null,
    }
  );

  useEffect(() => {
    const initiate = () => {
      const timeoutId = setTimeout(() => {
        const nextPage = ((postControllerRef.current?.currentPage ?? 0) + 1) % 4;
        setCurrentPage(nextPage);
        postControllerRef.current.currentPage = nextPage;
        initiate();
      }, 5000);

      postControllerRef.current.timeoutId = timeoutId;
    };

    postControllerRef.current.start = initiate;
    if (postControllerRef.current.timeoutId == null) initiate();
  }, []);

  const userClickedButton = (idx: number) => {
    setCurrentPage(idx);
    postControllerRef.current.currentPage = idx;
    if (postControllerRef.current.timeoutId) {
      clearTimeout(postControllerRef.current.timeoutId);
      postControllerRef.current.timeoutId = null;
    }
    postControllerRef.current.start();
  };

  const posts = POSTS.filter((e, i) => Math.floor(i / 4) === currentPage);

  return (
    <Layout>
      <div className={styles.hero}>
        <div className={styles.center}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adi</h1>
          <h2 className={styles.subtitle}>Incididunt ut labore et dolore magna aliqua</h2>
          <div className={styles.buttons}>
            <Button href="#tracks" backgroundColor="var(--accent-purple)">
              #tracks
            </Button>

            <Button href="#subjects" backgroundColor="var(--accent-purple)">
              #subjects
            </Button>

            <Button href="#latestpage" backgroundColor="var(--accent-purple)">
              #latestpage
            </Button>
          </div>
        </div>
      </div>

      <Banner />

      <div className={styles.tracks} id="tracks">
        <h1 className={styles.sectionHeading}>Tracks</h1>
        <div className={styles.tracks_list}>
          {TRACK_LIST.map(({ name, description }, idx) => {
            return (
              <div key={idx} className={styles.track}>
                <img
                  className={styles.image}
                  src="https://images.unsplash.com/photo-1726501615020-c191eb696705?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                <h2 className={styles.name}>{name}</h2>
                <p className={styles.description}>{description}</p>

                <div className={styles.rail}>
                  <Button backgroundColor="var(--accent-purple)" onClick={() => alert("Learn more was clicked")}>
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Banner />

      <div className={styles.courses} id="subjects">
        <h1 className={styles.sectionHeading}>Subjects</h1>

        <h1 className={styles.sectionSubheading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut
        </h1>

        <div className={styles.rail}>
          {Object.keys(COURSES).map((key) => {
            const color = key === selected ? "var(--accent-orange)" : "var(--accent-purple)";
            return (
              <Button backgroundColor={color} onClick={() => setSelected(key as keyof typeof COURSES)}>
                {key}
              </Button>
            );
          })}
        </div>

        <div className={styles.courses_list}>
          {courses.map(({ name, code }, idx) => {
            return (
              <div key={idx} className={styles.course}>
                <img
                  className={styles.image}
                  src="https://images.unsplash.com/photo-1726501615020-c191eb696705?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                <div className={styles.bottom}>
                  <h2 className={styles.code}>{code}</h2>
                  <p className={styles.name}>{name}</p>
                  <div className={styles.rail}>
                    <Button backgroundColor="var(--accent-purple)" onClick={() => alert("Learn more was clicked")}>
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Banner />

      <div className={styles.latest_posts} id="latestpage">
        <h1 className={styles.sectionHeading}>Latest Posts</h1>
        <div className={styles.posts}>
          {posts.map(({ title, daysAgo }, idx) => {
            return (
              <div key={idx} className={styles.post}>
                <img
                  className={styles.image}
                  src="https://images.unsplash.com/photo-1726501615020-c191eb696705?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className={styles.overlay}>
                  <h2 className={styles.title}>{title}</h2>
                  <p className={styles.days_ago}>{daysAgo}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.rail}>
          {[...Array(4).keys()].map((item, idx) => {
            return (
              <div
                onClick={() => userClickedButton(idx)}
                className={`${styles.marker} ${idx === currentPage ? styles.selected : ""}`}
              ></div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
