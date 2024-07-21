interface Card {
    id: string,
    attribute: string
    done: boolean
    clicked: boolean
}
const Button = (props: { card: Card, action: Function, pick: boolean, first: Card | null }) => {

    const chose = () => {
        const result = props.first === null ? false : props.first.id
        return result === props.card.id ? true : false
    }

    return (
        <button type='button' className="btn"
            onClick={() => props.action()}
            id={props.card.id}
            disabled={chose() || props.card.done}>
            {props.card.done || props.card.clicked ? props.card.attribute : ''}
        </button >
    )
}

export default Button