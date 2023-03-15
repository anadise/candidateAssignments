import { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';

const createRandomClient = () => {
    const sex = faker.name.sexType();
    // Passing sex to firstName and lastName to get the appropriate gendered name
    const firstName = faker.name.firstName(sex);
    const lastName = faker.name.lastName(sex);
    // Passing firstName and lastName to email to get the appropriate email
    const email = faker.internet.email(firstName, lastName);

    return {
        id: faker.datatype.uuid(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
        email,
        // Instead of doing extra processing on fronted to combine the names, I am returning the full name here
        fullName : firstName + ' ' +lastName,
        sex,
        supportTier: faker.helpers.arrayElement([
            'standard',
            'gold',
            'platinum',
        ]),
        hourlyRate: faker.helpers.arrayElement([60, 75, 100, 125]),
    };
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':            
            const clients = [
                ...Array.from(Array(20)).map(() => createRandomClient()),
            ];
            res.status(200).json({ clients });
            break;
            case 'POST':
            res.status(200).json({message: "Client created"});
            break;
        default:
            res.status(400).json({ error: 'Bad request type' });
    }
}
