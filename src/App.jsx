import { initialMembers, initialTasks } from './data.js'
import styles from './App.module.css'
import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import FilterBar from './components/FilterBar/FilterBar.jsx'
import Notice from './components/Notice/Notice.jsx'
import MembersList from './components/MembersList/MembersList.jsx'
import TasksPanel from './components/TasksPanel/TasksPanel.jsx'
import Footer from './components/Footer/Footer.jsx'

export default function App() {
  const [members] = useState(initialMembers)
  const [tasks, onToggleTask] = useState(initialTasks)
  const [selectedMemberId, onSelect] = useState(null)
  const [showOnlyActive, onToggleActive] = useState(false)
  const [layout, onLayoutChange] = useState("list")

  function handleonToggleTask(taskID) {
    onToggleTask((prevTasks) =>
      prevTasks.map((t) => (t.id === taskID ? { ...t, done: !t.done } : t))
    )
  }

  function handleonSelect(MemberId) {
    onSelect(MemberId)
  }

  function handleOnToggleActive() {
    onToggleActive((prev) => !prev)
  }

  function handleOnLayoutChange(newLayout) {
    onLayoutChange(newLayout)
  }

  const visibleMembers = showOnlyActive
    ? members.filter((member) => member.isActive) : members

  const selectedMember =
    members.find((member) => member.id === selectedMemberId) || null

  const memberTasks = tasks.filter((task) => task.assignedTo === selectedMemberId)

  return (
    <div className={styles.app}>
      <Header />
      <FilterBar
        showOnlyActive={showOnlyActive}
        onToggleActive={handleOnToggleActive}
        layout={layout}
        onLayoutChange={handleOnLayoutChange}
      />

{selectedMember && !selectedMember.isActive && (
  <Notice type="warning">
    {selectedMember.name} is currently inactive.
  </Notice>
)}

      <MembersList
        members={visibleMembers}
        layout={layout}
        selectedMemberId={selectedMemberId}
        onSelect={handleonSelect}
      />
      <TasksPanel
        member={selectedMember}
        tasks={memberTasks}
        onToggleTask={handleonToggleTask}
      />
      <Footer />
    </div>
  )
}
