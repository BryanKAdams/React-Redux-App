import React from 'react'

//MUI STYLES
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        textAlign: "center",
        margin: "0 Auto"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}))
const PersonCreator = props => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <h1>{props.person.name.title} {props.person.name.first} {props.person.name.last}</h1>
            <CardMedia
                className={classes.media}
                image={props.person.picture.large}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
            </CardContent>
        </Card>
    )

}

export default PersonCreator