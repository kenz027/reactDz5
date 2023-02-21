import CountryMap from "./components/CountryMap";
import CurrencyStats from "./components/CurrencyStats";
import LiveProgs from "./components/LiveProgs";
import NewsArticles from "./components/NewsArticles";
import PromoteBanner from "./components/PromoteBanner";
import PromoteBanner2 from "./components/PromoteBanner2";
import RecomCategories from "./components/RecomCategories";
import Search from "./components/Search";
import TVProgs from "./components/TVProgs";
import WeatherStats from "./components/WeatherStats";

export default function App() {
  return (
    <div>
      <NewsArticles newsArticles />
      <PromoteBanner />
      <CurrencyStats currencies />
      <Search />
      <PromoteBanner2 />
      <WeatherStats weatherstats />
      <RecomCategories recomCategories />
      <CountryMap list />
      <TVProgs tvproglist />
      <LiveProgs liveProgsList />
    </div>
  );
}
