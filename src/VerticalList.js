import Card from "./Card/Card";

function VerticalList({films}){
    return (
        <div className="flex flex-wrap -m-1 md:-m-2 mt-5">
            {films.map((film, index) => {
                return (
                    <div key={`${film.id}`} className="flex flex-wrap w-1/3">
                        <div className="w-full p-1 md:p-2">
                            <Card film={film} />
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
export default VerticalList