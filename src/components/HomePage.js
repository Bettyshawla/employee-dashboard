import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";
import Headers from "./Header";

 
export default function HomePage() {
  return (
    <div className="Homepage">
  
      <Headers />
      <SearchBar />
      <EmployeeList />

    </div>
  );
}
