// MemberCard - avatar (initials), name, role badge and a small role-colored action button.
import styles from './MemberCard.module.css'

/**
 * @param {object} props
 * @param {{id: number, name: string, role: "Leader" | "Member" | "Guest", isActive: boolean}} props.member
 * @param {boolean} props.isSelected - true when this is the selected member (the card gets styles.selected)
 * @param {(memberId: number) => void} props.onSelect - call it with member.id when the card is clicked
 */
export default function MemberCard({ member, isSelected, onSelect }) {
  // TODO: name + role badge
  // TODO: button colored by role (Leader=blue, Member=green, Guest=purple), disabled if inactive
  // TODO: inactive member -> the card also gets styles.inactive (faded)
  const initials = member.name.trim().toUpperCase().split(" ").map(word=>word[0]).join("")
  return (
    <article className={`${styles.card} ${!member.isActive ? styles.inactive : "" } ${isSelected ? styles.selected : ""}`} onClick={()=>onSelect(member.id)}>
  <span className={styles.avatar}> {initials}</span>
        <p>{member.name}</p>
        <p>{member.role}</p>
<button className={styles[member.role.toLowerCase()]} disabled={!member.isActive} onClick={(e) => e.stopPropagation()}>{member.role}</button>
    </article>
  )
}
