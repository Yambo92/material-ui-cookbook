import React, { useState } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default function UsingStatetoRenderListItems(){
    const [ items, setItems ] = useState([
        { name: 'First Item', timestamp: new Date() },
        { name: 'Third Item', timestamp: new Date() },
        { name: 'Second Item', timestamp: new Date() },
    ]);
    /* This is a higher-order function, which returns an event handler function
based on the  index argument. It toggles the selected state for the item at the
given index */
    const onClick = index => () => {
        const item = items[index]
        const newItems = [...items];
        newItems[index] = {...item, selected: !item.selected}
        setItems(newItems);
    }
    return (
        <List>
            {items.map((item, index) => (
                /* The  button property makes the list item behave like a button */
                /* The  dense property removes extra padding
from the list item. Without this property, the list takes up more space on
the screen. */
 /* The change to the background color is caused by the selected property of
ListItem . The change to the text color is caused by the  primaryTypographyProps
property of  ListItemText  */
                <ListItem key={index} button dense
                    selected={item.selected}
                    onClick={onClick(index)}
                >
                    <ListItemText primary={item.name}
                        secondary={item.timestamp.toLocaleString()}
                        primaryTypographyProps={{
                            color: item.selected ? 'primary': undefined
                        }}
                    />
                </ListItem>
            ))}
        </List>
    )
}