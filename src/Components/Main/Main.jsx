import React from "react";
import css from "./Main.module.css";
import Mainimg from "../../assets/main.svg";
import P1 from "../../assets/person1.svg";
import P2 from "../../assets/person2.svg";
import P3 from "../../assets/person3.svg";
import Addto from "../../assets/addtolist.svg";
import Save1 from "../../assets/saved1.svg";
import Save2 from "../../assets/saved2.svg";
import Save3 from "../../assets/saved3.svg";

const Main = () => {
  return (
    <div className={css.container}>
      <div className={css.div1}>
        <div className={css.div1left}>
          <img className={css.maining} src={Mainimg} alt="" />
        </div>
        <div className={css.div1right}>
          <span>EVENT 2023</span>
          <span>Comes Back To The Future</span>
          <div className={css.rbtns}>
            <button className={css.rbtn}>Register</button>
            <button className={css.mdbtn}>More Details</button>
          </div>
        </div>
      </div>

      <div className={css.div2}>
        <span>BATCAVE ACHIEVEMENTS</span>
        <span>
          Constant interaction with car owners is our main task in the process
          of brand development, and their Car Services{" "}
        </span>
      </div>

      <div className={css.div3}>
        <span>Popular events</span>
      </div>

      <div className={css.div4container}>
        <div className={css.wrap}>
          <div className={css.div5}>
            <div className={css.s1}>
              <img className={css.save1} src={Save1} alt="" />
              <div className={css.date}>
                <span>10</span>
                <span>June</span>
              </div>
              <div className={css.addto}>
                <img src={Addto} alt="" />
              </div>
            </div>

            <div className={css.s2}>
              The next event is going to conduct on the central stadium
            </div>
          </div>

          <div className={css.div6}>
            <div className={css.div6left}>
              <img className={css.p1} src={P1} alt="" />
              <img className={css.p2} src={P2} alt="" />
              <img className={css.p3} src={P3} alt="" />
            </div>

            <div className={css.div6middle}>
              <span>+40 Going</span>
            </div>

            <div className={css.div6right}>
              <img src={Location} alt="" />
              Near Central stadium
            </div>
          </div>
        </div>
        <div className={css.wrap}>
          <div className={css.div5}>
            <div className={css.s1}>
              <img className={css.save1} src={Save2} alt="" />
              <div className={css.date}>
                <span>10</span>
                <span>June</span>
              </div>
              <div className={css.addto}>
                <img src={Addto} alt="" />
              </div>
            </div>

            <div className={css.s2}>
              The next event is going to conduct on the central stadium
            </div>
          </div>

          <div className={css.div6}>
            <div className={css.div6left}>
              <img className={css.p1} src={P1} alt="" />
              <img className={css.p2} src={P2} alt="" />
              <img className={css.p3} src={P3} alt="" />
            </div>

            <div className={css.div6middle}>
              <span>+40 Going</span>
            </div>

            <div className={css.div6right}>
              <img src={Location} alt="" />
              Near Central stadium
            </div>
          </div>
        </div>
        <div className={css.wrap}>
          <div className={css.div5}>
            <div className={css.s1}>
              <img className={css.save1} src={Save3} alt="" />
              <div className={css.date}>
                <span>10</span>
                <span>June</span>
              </div>
              <div className={css.addto}>
                <img src={Addto} alt="" />
              </div>
            </div> 

            <div className={css.s2}>
              The next event is going to conduct on the central stadium
            </div>
          </div>

          <div className={css.div6}>
            <div className={css.div6left}>
              <img className={css.p1} src={P1} alt="" />
              <img className={css.p2} src={P2} alt="" />
              <img className={css.p3} src={P3} alt="" />
            </div>

            <div className={css.div6middle}>
              <span>+40 Going</span>
            </div>

            <div className={css.div6right}>
              <img src={Location} alt="" />
              Near Central stadium
            </div>
          </div>
        </div>
      </div>
      <div className={css.div4container}>
        <div className={css.wrap}>
          <div className={css.div5}>
            <div className={css.s1}>
              <img className={css.save1} src={Save1} alt="" />
              <div className={css.date}>
                <span>10</span>
                <span>June</span>
              </div>
              <div className={css.addto}>
                <img src={Addto} alt="" />
              </div>
            </div>

            <div className={css.s2}>
              The next event is going to conduct on the central stadium
            </div>
          </div>

          <div className={css.div6}>
            <div className={css.div6left}>
              <img className={css.p1} src={P1} alt="" />
              <img className={css.p2} src={P2} alt="" />
              <img className={css.p3} src={P3} alt="" />
            </div>

            <div className={css.div6middle}>
              <span>+40 Going</span>
            </div>

            <div className={css.div6right}>
              <img src={Location} alt="" />
              Near Central stadium
            </div>
          </div>
        </div>
        <div className={css.wrap}>
          <div className={css.div5}>
            <div className={css.s1}>
              <img className={css.save1} src={Save2} alt="" />
              <div className={css.date}>
                <span>10</span>
                <span>June</span>
              </div>
              <div className={css.addto}>
                <img src={Addto} alt="" />
              </div>
            </div>

            <div className={css.s2}>
              The next event is going to conduct on the central stadium
            </div>
          </div>

          <div className={css.div6}>
            <div className={css.div6left}>
              <img className={css.p1} src={P1} alt="" />
              <img className={css.p2} src={P2} alt="" />
              <img className={css.p3} src={P3} alt="" />
            </div>

            <div className={css.div6middle}>
              <span>+40 Going</span>
            </div>

            <div className={css.div6right}>
              <img src={Location} alt="" />
              Near Central stadium
            </div>
          </div>
        </div>
        <div className={css.wrap}>
          <div className={css.div5}>
            <div className={css.s1}>
              <img className={css.save1} src={Save3} alt="" />
              <div className={css.date}>
                <span>10</span>
                <span>June</span>
              </div>
              <div className={css.addto}>
                <img src={Addto} alt="" />
              </div>
            </div> 

            <div className={css.s2}>
              The next event is going to conduct on the central stadium
            </div>
          </div>

          <div className={css.div6}>
            <div className={css.div6left}>
              <img className={css.p1} src={P1} alt="" />
              <img className={css.p2} src={P2} alt="" />
              <img className={css.p3} src={P3} alt="" />
            </div>

            <div className={css.div6middle}>
              <span>+40 Going</span>
            </div>

            <div className={css.div6right}>
              <img src={Location} alt="" />
              Near Central stadium
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
