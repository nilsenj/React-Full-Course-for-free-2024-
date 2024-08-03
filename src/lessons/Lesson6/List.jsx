import PropTypes from "prop-types";

const List = (props) => {
    const ListDefaultProps = {
        category: "Category",
        items: []
    }
    const category = props.category;
    const itemList = {...ListDefaultProps, ...props}.items;

    const listItems = itemList.map((item) => {
        return (
            <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>
        );
    });

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

List.propTypes = {
    items: PropTypes.array,
    category: PropTypes.string
}

export default List;