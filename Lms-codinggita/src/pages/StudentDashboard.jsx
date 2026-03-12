import React from "react";
import { students } from "../utils/student";
import Navbar from "../components/Navbar";

const StudentDashboard = () => {
  const student = students[0];

  const attendancePercent = Math.round(
    ((student.attendance.present + student.attendance.bonus) /
      student.attendance.total) *
    100
  );

  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      <Navbar user={{ name: student.name, role: "Student" }} />

      <main className="p-8 max-w-7xl mx-auto space-y-8">
        {/* TOP STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a1d24]/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors group">
            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">University</p>
            <h2 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">{student.university}</h2>
          </div>

          <div className="bg-[#1a1d24]/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors group">
            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">UID</p>
            <h2 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">{student.uid}</h2>
          </div>

          <div className="bg-[#1a1d24]/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors group">
            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Enrolled Subjects</p>
            <h2 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">{student.subjects.length}</h2>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN: Profile & Attendance */}
          <div className="lg:col-span-1 space-y-8">
            {/* PROFILE CARD */}
            <div className="bg-[#1a1d24] p-8 rounded-2xl border border-gray-800 shadow-xl">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <img
                    src={student.image}
                    alt="profile"
                    className="w-24 h-24 rounded-full border-2 border-purple-500/50 p-1 object-cover"
                  />
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-[#1a1d24] rounded-full"></div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold">{student.name}</h2>
                  <p className="text-purple-400 font-medium">{student.email}</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400 font-medium">Mobile</span>
                  <span className="text-gray-200">{student.mobile}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-medium">Batch</span>
                  <span className="text-gray-200">2024-28</span>
                </div>
              </div>
            </div>

            {/* ATTENDANCE CARD */}
            <div className="bg-[#1a1d24] p-8 rounded-2xl border border-gray-800">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">
                    {student.attendance.semester}
                  </h3>
                  <h2 className="text-xl font-bold">Attendance</h2>
                </div>
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  {attendancePercent}%
                </span>
              </div>

              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${attendancePercent}%` }}
                ></div>
              </div>

              <div className="mt-4 flex justify-between text-sm">
                <span className="text-gray-400">Completed Sessions</span>
                <span className="font-semibold">{student.attendance.present} / {student.attendance.total}</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Subjects, Mentors, Assignments */}
          <div className="lg:col-span-2 space-y-8">

            {/* SUBJECTS */}
            <div className="bg-[#1a1d24] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold mb-6">Course Subjects</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {student.subjects.map((subject, index) => (
                  <div
                    key={index}
                    className="bg-[#0f1117] border border-gray-800 p-4 rounded-xl text-sm font-medium hover:scale-[1.02] transition-transform cursor-default"
                  >
                    {subject}
                  </div>
                ))}
              </div>
            </div>

            {/* MENTORS */}
            <div className="bg-[#1a1d24] p-8 rounded-2xl border border-gray-800">
              <h2 className="text-xl font-bold mb-6">Your Mentors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {student.mentors.map((mentor, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-[#0f1117] border border-gray-800 p-4 rounded-2xl hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center font-bold text-gray-900 shadow-lg shadow-green-500/10">
                      {mentor.name[0]}
                    </div>

                    <div>
                      <p className="font-bold">{mentor.name}</p>
                      <p className="text-xs text-gray-400 uppercase tracking-widest">{mentor.batch} Lead</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ASSIGNMENTS & EVENTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1a1d24] rounded-2xl p-8 border border-gray-800">
                <h2 className="text-xl font-bold mb-4">Assignments</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Submitted</span>
                    <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold ring-1 ring-green-500/20">{student.assignments}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <p className="text-gray-400">Pending</p>
                    <p className="text-orange-400 underline cursor-pointer hover:text-orange-300">{student.pendingAssignments} actions needed</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1d24] rounded-2xl p-8 border border-gray-800">
                <h2 className="text-xl font-bold mb-4">Events</h2>
                {student.events.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-20 text-gray-500 italic text-sm">
                    No upcoming events
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {student.events.map((event, index) => (
                      <li key={index} className="text-purple-400 text-sm">• {event}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <button className="bg-gray-800 hover:bg-gray-700 p-4 rounded-xl border border-gray-700 text-center transition-all">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Need help?</p>
                <h3 className="font-bold text-sm">Mentor Chat</h3>
              </button>

              <button className="bg-gray-800 hover:bg-gray-700 p-4 rounded-xl border border-gray-700 text-center transition-all opacity-60 cursor-not-allowed">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Schedule</p>
                <h3 className="font-bold text-sm">Timetable</h3>
              </button>

              <button className="bg-purple-600 hover:bg-purple-500 p-4 rounded-xl shadow-lg shadow-purple-500/20 text-center transition-all group">
                <p className="text-purple-200 text-xs font-bold uppercase tracking-widest mb-1">Community</p>
                <h3 className="font-bold text-sm group-hover:scale-110 transition-transform">Group Hub</h3>
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
