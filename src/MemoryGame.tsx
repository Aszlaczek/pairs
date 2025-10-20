import { useState, useEffect } from 'react';
import { Grid, Card, CardActionArea, Typography, Button, Box } from '@mui/material';

// przykładowe obrazki (możesz podmienić ścieżki)
const images = [
    '/img/apple.png',
    '/img/banana.png',
    '/img/cherry.png',
    '/img/grape.png',
    '/img/lemon.png',
    '/img/orange.png',
    '/img/strawberry.png',
    '/img/watermelon.png',
];

// pomocnicza funkcja do tasowania kart
const shuffleArray = (array) => {
    return array
        .flatMap((img) => [{ image: img, id: Math.random() }, { image: img, id: Math.random() }])
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, isFlipped: false, isMatched: false }));
};

export default function MemoryGame() {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [lockBoard, setLockBoard] = useState(false);
    const [moves, setMoves] = useState(0);

    useEffect(() => {
        resetGame();
    }, []);

    const resetGame = () => {
        setCards(shuffleArray(images));
        setFlipped([]);
        setMoves(0);
        setLockBoard(false);
    };

    const handleCardClick = (index) => {
        if (lockBoard || cards[index].isFlipped || cards[index].isMatched) return;

        const newCards = [...cards];
        newCards[index].isFlipped = true;
        const newFlipped = [...flipped, index];
        setCards(newCards);
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            setLockBoard(true);
            setMoves((m) => m + 1);

            setTimeout(() => {
                const [first, second] = newFlipped;
                if (newCards[first].image === newCards[second].image) {
                    newCards[first].isMatched = true;
                    newCards[second].isMatched = true;
                } else {
                    newCards[first].isFlipped = false;
                    newCards[second].isFlipped = false;
                }
                setCards(newCards);
                setFlipped([]);
                setLockBoard(false);
            }, 800);
        }
    };

    return (
        <Box sx={{ p: { xs: 1, sm: 2, md: 4 }, textAlign: 'center' }}>
            <Typography
                variant="h4"
                sx={{
                    mb: 2,
                    fontSize: { xs: '1.25rem', sm: '2rem', md: '2.5rem' },
                    fontWeight: 'bold',
                }}
            >
                🎴 Gra Memory
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    mb: 3,
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                }}
            >
                Ruchy: {moves}
            </Typography>

            <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
                {cards.map((card, index) => (
                    <Grid item xs={4} sm={3} md={2.5} key={card.id}>
                        <Card
                            sx={{
                                backgroundColor: card.isMatched ? '#c8e6c9' : '#e0f7fa',
                                borderRadius: 3,
                                boxShadow: 3,
                                transition: 'transform 0.3s',
                                transform: card.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
                            }}
                        >
                            <CardActionArea onClick={() => handleCardClick(index)}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        paddingTop: '100%', // kwadratowy kształt kart
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            inset: 0,
                                            backfaceVisibility: 'hidden',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {!card.isFlipped ? (
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                                                    fontWeight: 700,
                                                }}
                                            >
                                                ?
                                            </Typography>
                                        ) : (
                                            <img
                                                src={card.image}
                                                alt="card"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '10%',
                                                    objectFit: 'cover',
                                                    backfaceVisibility: 'hidden',
                                                }}
                                            />
                                        )}
                                    </Box>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Button
                variant="contained"
                color="primary"
                sx={{ mt: 4, fontSize: { xs: '0.9rem', sm: '1rem' }, px: 3, py: 1 }}
                onClick={resetGame}
            >
                🔄 Zresetuj grę
            </Button>
        </Box>
    );
}
