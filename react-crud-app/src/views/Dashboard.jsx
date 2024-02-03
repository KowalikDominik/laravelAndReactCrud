// TODO Add request to api: total user count, current day registered users and show these information in this view.
export default function Dashboard() {
    return (
        <>
            <h1 className="text-3xl text-black pb-6">Dashboard</h1>
            <div className="flex flex-wrap mt-6">
                <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
                    <p className="text-xl pb-3 flex items-center">
                        <i className="fas fa-plus mr-3"></i> Monthly Reports
                    </p>
                    <div className="p-6 bg-white h-48 text-5xl">10</div>
                </div>
                <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
                    <p className="text-xl pb-3 flex items-center">
                        <i className="fas fa-check mr-3"></i> Resolved Reports
                    </p>
                    <div className="p-6 bg-white h-48 text-5xl">20</div>
                </div>
            </div>
        </>
    );
}
