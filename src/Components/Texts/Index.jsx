export const Text = ({ type, text }) => {
    const renderTextName = (type) => {
        switch (type) {
            case 'lead-text':
                return 'text__lead';
            case 'text-sm-dark':
                return 'text__sm--dark';
            case 'text-xs-dark':
                return 'text__xs--dark';
            case 'text-count-dark':
                return 'text__count--dark';
            case 'text-lead-dark':
                return 'text__lead--dark';
            case 'text-xs-orange':
                return 'text__xs--orange';
            default:
                return '';
        }
    }
    return (
        <p
            className={renderTextName(type)}
        >
            {text}
        </p>)
}

