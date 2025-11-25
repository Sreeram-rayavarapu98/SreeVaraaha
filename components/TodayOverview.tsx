export default function TodayOverview() {
  return (
    <div className="fixed bottom-4 left-4 bg-blue-50 rounded-lg p-4 w-56 border border-blue-100 hidden lg:block">
      <div className="text-sm font-semibold text-gray-700 mb-2">Today overview</div>
      <div className="text-sm text-gray-600">Appointments 8</div>
      <div className="text-sm text-gray-600">New customers 5</div>
      <a href="#" className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-block">
        View full report
      </a>
    </div>
  )
}

