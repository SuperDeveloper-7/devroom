import React, { useEffect } from "react";
import Card from "../components/elements/Card";
import Text from "../components/elements/Text";
import Button from "../components/elements/Button";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="text-white pt-10 pb-20">
      <section className="grid grid-cols-2 gap-4">
        <Card className="text-center pb-16">
          <Text className="font-semibold text-xl">
            Senior full-stack Developer!
          </Text>
          <Text className="text-sm pt-2">
            Achieve your daily goals and get more done using the DevRoom
          </Text>
          <div className="flex justify-center items-center mt-8">
            <div className="py-2 px-4 rounded-md border-b border-x-0 border-x-white border-t-0 border-t-white border-white ">
              <div className="px-4 flex space-x-4 rounded-md">
                <div className="flex flex-col">
                  <span className="text-4xl font-semibold">7</span>
                  <span className="text-xs pt-2">years</span>
                </div>
                <div className="flex flex-col justify-between">
                  <span>^</span>
                  <span>v</span>
                </div>
              </div>
            </div>
          </div>
          <Text className="text-sm mt-6">
            What is more important is to complete the goal of project rather
            than other
          </Text>
          <Button className="mt-6">DevRoom Trial</Button>
        </Card>
        <Card className="py-4">
          <div>
            <div className="flex justify-between">
              <Text className="text-sm font-semibold">Skill</Text>
              <Button className="py-1 px-6">More</Button>
            </div>
            <div className="pl-6">
              <div>React.js - 6 years</div>
              <div>Redux</div>
              <div>Next</div>
              <div>Typescript</div>
              <div>React-native - 5 years</div>
              <div>Vue</div>
              <div>Firebase</div>
              <div>MERN Stack</div>
              <div>SQL</div>
              <div>Node.js</div>
              <div>Tailwind CSS</div>
              <div>Nativebase</div>
              <div>Html/CSS/Javascript</div>
            </div>
          </div>
        </Card>

        <Card className="py-4 col-span-2">
          <div className="flex flex-col items-center justify-between">
            <Text className="text-lg font-semibold mb-10">About me</Text>
            <div>
              A senior full-stack developer with 7 years of experience. Since
              2017, I have worked with several early-stage startups in remote
              settings, by attending daily stand-ups, discussing weekly sprints
              and wearing multiple hats and made a great contribution to
              building their team cultures by working across the stack. I took
              full ownership of building, shipping and maintaining the projects.
              While working in several startups, I have collaborated with
              backend developers, designers, project managers, people from
              technical and non-technical background.
              <br /> I am a creative thinker, life-long learner, detail-oriented
              debugger, algorithm lover and passionate team player. (I have
              developed and published from scratch or maintained 10+ mobile apps
              in App store and Google store by using React Native, so I probably
              will be helpful for mobile team). It would be a definite plus for
              the team.
              <br />
              I think I will probably be helpful to your team. Recently, I have
              been more involved in mentoring, code reviewing and version
              controlling by using tools like git and github, etc.
              <br />
              Thanks.
            </div>
          </div>
        </Card>
      </section>
    </section>
  );
};

export default Home;
