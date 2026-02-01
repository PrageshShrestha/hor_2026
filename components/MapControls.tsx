import { Layers, Map, Type, RefreshCw } from 'lucide-react';

interface MapControlsProps {
    isSatellite: boolean;
    onToggle: () => void;
    showDistrictNames: boolean;
    onToggleNames: () => void;
    showLocalLevels: boolean;
    onToggleLocalLevels: () => void;
    electionYear: '2026' | '2079';
    showByelection: boolean;
    onToggleByelection: () => void;
}

export default function MapControls({
    isSatellite,
    onToggle,
    showDistrictNames,
    onToggleNames,
    showLocalLevels,
    onToggleLocalLevels,
    electionYear,
    showByelection,
    onToggleByelection
}: MapControlsProps) {
    return (
        <div className="absolute top-4 right-4 z-[400] flex flex-col gap-2">
            <button
                onClick={onToggle}
                className="bg-white p-3 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-all group"
                title={isSatellite ? "Switch to Election Mode" : "Switch to Satellite Mode"}
            >
                {isSatellite ? (
                    <Map size={24} className="text-gray-700" />
                ) : (
                    <Layers size={24} className="text-gray-700" />
                )}
                <span className="sr-only">Toggle Map Layer</span>
            </button>



            <button
                onClick={onToggleNames}
                className={`p-3 rounded-lg shadow-md border transition-all group ${showDistrictNames ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
                title={showDistrictNames ? "Hide District Names" : "Show District Names"}
            >
                <Type size={24} className={showDistrictNames ? "text-blue-600" : "text-gray-700"} />
                <span className="sr-only">Toggle District Names</span>
            </button>

            <button
                onClick={onToggleLocalLevels}
                className={`p-3 rounded-lg shadow-md border transition-all group ${showLocalLevels ? 'bg-purple-50 border-purple-200' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
                title={showLocalLevels ? "Hide Local Levels" : "Show Local Levels"}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={showLocalLevels ? "text-purple-600" : "text-gray-700"}
                >
                    <rect x="3" y="21" width="18" height="2" />
                    <path d="M5 21V7l8-4 8 4v14" />
                    <path d="M13 21V12" />
                    <path d="M9 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                </svg>
                <span className="sr-only">Toggle Local Levels</span>
            </button>

            <button
                onClick={onToggleByelection}
                disabled={electionYear !== '2079'}
                className={`p-3 rounded-lg shadow-md border transition-all group ${
                    showByelection 
                        ? 'bg-orange-50 border-orange-200' 
                        : electionYear === '2079' 
                            ? 'bg-white border-gray-200 hover:bg-gray-50' 
                            : 'bg-gray-100 border-gray-200 cursor-not-allowed opacity-50'
                }`}
                title={showByelection ? "Hide By-election Results" : electionYear === '2079' ? "Show By-election Results" : "Enable 2079 Election to View By-elections"}
            >
                <RefreshCw size={24} className={showByelection ? "text-orange-600" : electionYear === '2079' ? "text-gray-700" : "text-gray-400"} />
                <span className="sr-only">Toggle By-election Results</span>
            </button>
        </div>
    );
}
