import classes from "./Company.module.css";
import link from "../assets/link.png";

const tasks = [
  `Designed a Chrome extension for efficient image uploads, eliminating
    the need for manual catalog inspection and individual image uploads,
    greatly simplifying the brand team's workflow. (Content Management Dashboard)`,
  "Transformed catalog uploading for the brand team by introducing Excel sheet uploads, significantly reducing manual effort and a remarkable time- saving impact. (Content Management Dashboard)",
  `Successfully achieved an impressive 87% reduction in loading time for the internal tool, significantly enhancing its efficiency and user experience. (Content Management Dashboard)`,
  `Delivered a compelling sales page in just 24 hours during a festive season, driving an outstanding 31% surge in sales and elevating the click-through rate (CTR) by a remarkable 26.5%. (E-commerce App)`,
  `Initiated the adoption of Vuex central state management, cutting down on unnecessary API calls (10-12%) during app navigation, resulting in an improved user experience and elevated code quality throughout the project. (E-commerce App)`,
  `Introduced the 'Buy X Get Y' (BxGy) coupon type, leading to a significant 40- 50% rise in average order value (AOV) and, consequently, a strong boost in sales. (E-commerce App)`,
  `Enhanced the cart page and checkout process with seamless Juspay integration, driving a conversion rate increase from 3% to 5%. Additionally, this optimization successfully minimized payment failures, ensuring a smoother checkout experience. (E-commerce App)`,
  `Crafted a creator web app for easy store management and detailed analytics, utilizing top coding techniques to ensure high scalability. (Creator App)`,
  `Successfully migrated a project from Vue 3 (options API) to Nuxt 3 to enhance SEO capabilities and implement server-side rendering(SSR). (E-commerce App).`,
  `Implemented a sourcing dashboard with React and Ant Design, featuring role-based access control (RBAC). It allows management of sourcing brands, creators, orders, and rules. This setup seamlessly integrates brands and simplifies the handling of creator and order data, ensuring excellent user
   experiences for diverse teams. (Sourcing Dashboard)`,
];

function gotoLink(link) {
  window.open(link, "_blank");
}

export default function Comapany() {
  return (
    <div className={classes.company}>
      <div className={classes.details}>
        <div className={classes["hypd-position"]}>
          <div className={classes.hypd}>// hypd</div>
          <div className={classes.position}>sde - 1</div>
        </div>
        <div className={classes.time}>jan'22 - present</div>
      </div>
      <div className={classes.tasks}>
        {tasks.map((task) => {
          return <div key={task}># {task}</div>;
        })}
      </div>

      <div className={classes.links}>
        <div
          className={classes.store}
          onClick={() => gotoLink("https://hypd.store")}
        >
          <img src={link} alt="" />
          <span> https://hypd.store </span>
        </div>
        <div
          className={classes.dashboard}
          onClick={() => gotoLink("https://creator.hypd.store")}
        >
          <img src={link} alt="" />
          <span> https://creator.hypd.store</span>
        </div>
      </div>
    </div>
  );
}
