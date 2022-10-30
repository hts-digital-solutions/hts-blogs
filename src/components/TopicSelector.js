import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAlertInfo } from "../store/slices/EnvironmentSlice";
import styles from "../styles/components/TopicSelector.module.css"
import Button from "./Button";

const topics = [
    {
        id: 1,
        title: "Development",
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    },
    {
        id: 2,
        title: "Python",
        image: "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
    },
    {
        id: 3,
        title: "Universe",
        image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=80",
    },
    {
        id: 4,
        title: "Travelling",
        image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
    }
]

export default function TopicSelector({ title = '', onPostIn }) {

    const [selected, setSelected] = useState(0)
    const dispatch = useDispatch()

    const handleSelect = (id) => {
        setSelected(id)
    }

    const handlePostIn = () => {
        if (!selected) {
            dispatch(setAlertInfo({
                data: {
                    type: "error",
                    message: "Please select a topic to post in.",
                    icon: 'la la-times'
                }
            }))
        } else {
            onPostIn(selected)
        }
    }

    const handleSkip = () => {
        onPostIn(selected)
    }

    return (
        <div className={styles.topic__container}>
            <h2>{title}</h2>
            <div className={styles.topic__list}>
                {
                    topics.map((topic, index) => (
                        <TopicItem
                            key={index}
                            topic={topic}
                            selected={topic.id === selected}
                            onClick={handleSelect}
                        />
                    ))
                }
            </div>
            <div className={styles.topic__actions}>
                <Button title="Skip" theme="secondary" onClick={handleSkip} />
                <Button title="Post In" theme="primary" onClick={handlePostIn} />
            </div>
        </div>
    )
}

const TopicItem = ({ topic, selected, onClick }) => {

    const onSelect = () => {
        onClick(topic.id)
    }

    return (
        <div className={`${styles.topic__list_item} ${selected ? styles.selected : ''}`} onClick={onSelect}>
            <div className={styles.topic__list_item_image}>
                <Image
                    src={topic.image}
                    alt={topic.title}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
            <h4>{topic.title}</h4>
        </div>
    )
}