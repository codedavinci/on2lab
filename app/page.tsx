import "@picocss/pico";
import modules from "./page.module.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

interface ICountry {
  name: string;
  population: string;
  flag: string;
}

type ICountryProps = {
  country: ICountry;
};

function normalizeCountries(rawCountries: any[]): ICountry[] {
  return rawCountries.map((country: any) => {
    return {
      name: country.name.common,
      population: country.population,
      flag: country.flags.png,
    };
  });
}

async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const rawCountries = await response.json();

  const countries = normalizeCountries(rawCountries);

  return countries;
}

function Country({ country }: ICountryProps) {
  return (
    <article>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={country.flag} alt={country.name} className={modules.avatar} />
        <h1>{country.name}</h1>
      </div>
      population: {country.population}
    </article>
  );
}

export default async function Countries() {
  // const countries = await getCountries();

  return (
    <div className={modules.maincontainer}>
      {/* <Sidebar /> */}

      <Header />

      {/* <table>
        {countries.map((country) => {
          return <Country country={country} key={country.population} />;
        })}
      </table> */}
    </div>
  );
}
