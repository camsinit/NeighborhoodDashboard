import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('20a4eeeb-639c-43f5-851e-ef3a7f78ba63', '1Milton_Glover@hotmail.com', 'Emily Clark', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_W1ll14mB112', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('58efcd05-ab03-4dbd-bf02-8f01dadc2492', '7Alfredo84@yahoo.com', 'Emily Clark', 'https://i.imgur.com/YfJQV5z.png?id=9', 'cus_J4n3Sm1th456', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('a186c1c3-0889-4a67-a7d1-d0f82ad948c0', '13Dortha1@yahoo.com', 'Michael Jordan', 'https://i.imgur.com/YfJQV5z.png?id=15', 'cus_3m1lyC101', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('efdfd3fd-2d25-4e39-b053-8e9915e96ff9', '19Mozell33@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=21', 'cus_J0HnD0e123', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('2baccd91-2dd8-49e8-b440-28bd8beaa8a0', '25Winifred77@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=27', 'cus_J0HnD0e123', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('246f0bf9-cbc9-4b76-bd4e-a920350c9993', '37Rosa84@yahoo.com', 'William Brown', 'https://i.imgur.com/YfJQV5z.png?id=39', 'cus_J0HnD0e123', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('b4781f0f-f384-42f8-9d63-9228a73ba158', '43Floy1@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_J0HnD0e123', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('9da0ca7c-bd7f-4df3-a708-0e8c0f86aff3', '49Andres.Gleichner24@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=51', 'cus_W1ll14mB112', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('ad799a70-a04b-415d-8054-0a16311eb797', '55Lincoln22@yahoo.com', 'Michael Jordan', 'https://i.imgur.com/YfJQV5z.png?id=57', 'cus_3m1lyC101', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Event" ("id", "name", "description", "date", "location", "createdById") VALUES ('04a43b9b-f9ae-4dcd-9ca8-ddad7ef8ca72', 'Art and Craft Fair', 'Showcase your artistic talents and enjoy crafts from local artists.', '2024-12-17T12:25:56.506Z', 'Main Street Plaza', 'b4781f0f-f384-42f8-9d63-9228a73ba158');
INSERT INTO "Event" ("id", "name", "description", "date", "location", "createdById") VALUES ('403cda0e-d8e7-47f2-8ef6-b634ff0da304', 'Charity Fun Run', 'Discuss safety and security with your neighbors and local law enforcement.', '2024-07-16T00:21:42.371Z', 'Central Park', 'a186c1c3-0889-4a67-a7d1-d0f82ad948c0');
INSERT INTO "Event" ("id", "name", "description", "date", "location", "createdById") VALUES ('c1fe7558-63c5-40c3-8cd7-46479de52bf2', 'Charity Fun Run', 'Run for a cause and help raise funds for local charities.', '2025-07-05T08:14:53.465Z', 'Central Park', 'b4781f0f-f384-42f8-9d63-9228a73ba158');
INSERT INTO "Event" ("id", "name", "description", "date", "location", "createdById") VALUES ('5422004a-89e1-49a6-8466-669a6d9ed3f4', 'Neighborhood Watch Meeting', 'Discuss safety and security with your neighbors and local law enforcement.', '2024-07-11T17:31:31.759Z', 'Central Park', 'ad799a70-a04b-415d-8054-0a16311eb797');
INSERT INTO "Event" ("id", "name", "description", "date", "location", "createdById") VALUES ('a4ee7bb0-eff5-4a05-9c4b-de5c979f5696', 'Community Cleanup', 'Fresh produce and homemade goods from local farmers and artisans.', '2024-08-27T01:16:28.727Z', 'Riverside Park', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Event" ("id", "name", "description", "date", "location", "createdById") VALUES ('fb46f340-ad21-4a43-bcf5-3203c8f68d12', 'Art and Craft Fair', 'Showcase your artistic talents and enjoy crafts from local artists.', '2024-09-13T12:13:59.347Z', 'Community Center', 'efdfd3fd-2d25-4e39-b053-8e9915e96ff9');
INSERT INTO "Event" ("id", "name", "description", "date", "location", "createdById") VALUES ('54f8095d-3a75-4b1e-a752-14b32cdae998', 'Community Cleanup', 'Join us for a community cleanup event to keep our neighborhood beautiful.', '2024-08-18T20:21:39.778Z', 'Central Park', '246f0bf9-cbc9-4b76-bd4e-a920350c9993');
INSERT INTO "Event" ("id", "name", "description", "date", "location", "createdById") VALUES ('95c25153-410f-415a-97a9-7056e5f4bbcb', 'Charity Fun Run', 'Showcase your artistic talents and enjoy crafts from local artists.', '2023-09-25T14:36:57.817Z', 'Central Park', '246f0bf9-cbc9-4b76-bd4e-a920350c9993');
INSERT INTO "Event" ("id", "name", "description", "date", "location", "createdById") VALUES ('5423bfb9-8727-4235-ba6e-626dbd880bf4', 'Local Farmers Market', 'Run for a cause and help raise funds for local charities.', '2024-04-16T19:26:17.198Z', 'Riverside Park', '9da0ca7c-bd7f-4df3-a708-0e8c0f86aff3');
INSERT INTO "Event" ("id", "name", "description", "date", "location", "createdById") VALUES ('d517449e-70bc-4372-b853-8cfcab9267ee', 'Charity Fun Run', 'Run for a cause and help raise funds for local charities.', '2025-06-29T05:08:10.311Z', 'Central Park', '20a4eeeb-639c-43f5-851e-ef3a7f78ba63');

INSERT INTO "Group" ("id", "name", "description", "createdById") VALUES ('034bcff4-64eb-42b9-8ff4-af1b879c453b', 'Neighborhood Watch', 'Exploring the best local eateries and sharing recipes.', 'b4781f0f-f384-42f8-9d63-9228a73ba158');
INSERT INTO "Group" ("id", "name", "description", "createdById") VALUES ('75b3624e-941b-4b56-bde0-7b6142e073b4', 'Local Foodies', 'A group for local gardening enthusiasts to share tips and resources.', 'ad799a70-a04b-415d-8054-0a16311eb797');
INSERT INTO "Group" ("id", "name", "description", "createdById") VALUES ('93fa32b5-6b6c-46c5-bca7-74c6119460e9', 'Green Thumb Gardeners', 'Join us for monthly book discussions and literary events.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Group" ("id", "name", "description", "createdById") VALUES ('1aa5603a-eba0-4c80-838f-e71d05e41cb6', 'Neighborhood Watch', 'Exploring the best local eateries and sharing recipes.', '2baccd91-2dd8-49e8-b440-28bd8beaa8a0');
INSERT INTO "Group" ("id", "name", "description", "createdById") VALUES ('addef04c-b29b-4809-91c0-b4e74c610096', 'Green Thumb Gardeners', 'Community members dedicated to keeping our neighborhood safe.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Group" ("id", "name", "description", "createdById") VALUES ('bab2db0a-8966-472d-bc67-890fc45b4954', 'Book Club Enthusiasts', 'Join us for monthly book discussions and literary events.', 'b4781f0f-f384-42f8-9d63-9228a73ba158');
INSERT INTO "Group" ("id", "name", "description", "createdById") VALUES ('4827277a-77ed-4fed-9a8f-ccef286174bc', 'Local Foodies', 'A group for fitness lovers to plan workouts and share health tips.', '9da0ca7c-bd7f-4df3-a708-0e8c0f86aff3');
INSERT INTO "Group" ("id", "name", "description", "createdById") VALUES ('3d185537-5085-4863-ba7c-1b4434e7f8e6', 'Green Thumb Gardeners', 'A group for local gardening enthusiasts to share tips and resources.', '2baccd91-2dd8-49e8-b440-28bd8beaa8a0');
INSERT INTO "Group" ("id", "name", "description", "createdById") VALUES ('1e4ab06b-b3b0-49ee-bb97-5c5bcf9bfd29', 'Green Thumb Gardeners', 'A group for fitness lovers to plan workouts and share health tips.', '58efcd05-ab03-4dbd-bf02-8f01dadc2492');
INSERT INTO "Group" ("id", "name", "description", "createdById") VALUES ('0c969fcc-dc4d-49d1-b342-54c65da88ef8', 'Fitness Fanatics', 'Join us for monthly book discussions and literary events.', '9da0ca7c-bd7f-4df3-a708-0e8c0f86aff3');

INSERT INTO "Offering" ("id", "name", "description", "createdById") VALUES ('e4a4b6bf-7038-4a5e-b7e9-b2c7d6818330', 'Book Club Membership', 'A variety of gardening tools available for loan to community members.', 'a186c1c3-0889-4a67-a7d1-d0f82ad948c0');
INSERT INTO "Offering" ("id", "name", "description", "createdById") VALUES ('d9b864cd-143a-44de-b76b-181c7ae556ab', 'Cooking Workshop', 'Join our weekly yoga sessions to improve flexibility and reduce stress.', 'ad799a70-a04b-415d-8054-0a16311eb797');
INSERT INTO "Offering" ("id", "name", "description", "createdById") VALUES ('594022a2-7acb-417e-b924-272346becf13', 'Book Club Membership', 'Offering dog walking services for busy pet owners.', 'efdfd3fd-2d25-4e39-b053-8e9915e96ff9');
INSERT INTO "Offering" ("id", "name", "description", "createdById") VALUES ('b79a250a-903f-438f-8b00-9b12b4a3d380', 'Gardening Tools', 'Offering dog walking services for busy pet owners.', '20a4eeeb-639c-43f5-851e-ef3a7f78ba63');
INSERT INTO "Offering" ("id", "name", "description", "createdById") VALUES ('7e544f69-5487-46c8-b3dd-8704f7bd44e7', 'Gardening Tools', 'Join our weekly yoga sessions to improve flexibility and reduce stress.', '20a4eeeb-639c-43f5-851e-ef3a7f78ba63');
INSERT INTO "Offering" ("id", "name", "description", "createdById") VALUES ('ee296b8e-5402-46c6-8259-553db3bd84b0', 'Dog Walking Service', 'A variety of gardening tools available for loan to community members.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Offering" ("id", "name", "description", "createdById") VALUES ('15a350ff-248f-4667-bee9-2c04b7729f26', 'Gardening Tools', 'Join our weekly yoga sessions to improve flexibility and reduce stress.', 'ad799a70-a04b-415d-8054-0a16311eb797');
INSERT INTO "Offering" ("id", "name", "description", "createdById") VALUES ('c6ffc792-068f-4e53-b857-9565e6da670c', 'Yoga Classes', 'A variety of gardening tools available for loan to community members.', 'efdfd3fd-2d25-4e39-b053-8e9915e96ff9');
INSERT INTO "Offering" ("id", "name", "description", "createdById") VALUES ('8d87e120-5abe-4592-abb3-90272071f077', 'Cooking Workshop', 'Join our weekly yoga sessions to improve flexibility and reduce stress.', 'a186c1c3-0889-4a67-a7d1-d0f82ad948c0');
INSERT INTO "Offering" ("id", "name", "description", "createdById") VALUES ('bc390664-f622-4bb0-9f63-50e142207e97', 'Cooking Workshop', 'Offering dog walking services for busy pet owners.', 'efdfd3fd-2d25-4e39-b053-8e9915e96ff9');

INSERT INTO "EmergencyInfo" ("id", "contactName", "contactPhone", "medicalConditions", "userId") VALUES ('1acf479e-d3a7-410e-92d8-834ee95e9822', 'Charlie Davis', '5554321', 'Asthma', '2baccd91-2dd8-49e8-b440-28bd8beaa8a0');
INSERT INTO "EmergencyInfo" ("id", "contactName", "contactPhone", "medicalConditions", "userId") VALUES ('fa7b4b74-72de-419a-b9ec-df4af98465bb', 'Charlie Davis', '5556789', 'Diabetes', 'efdfd3fd-2d25-4e39-b053-8e9915e96ff9');
INSERT INTO "EmergencyInfo" ("id", "contactName", "contactPhone", "medicalConditions", "userId") VALUES ('0293f315-3ccc-482a-85b3-eb90fa12c7ba', 'John Doe', '5556789', 'Diabetes', '2baccd91-2dd8-49e8-b440-28bd8beaa8a0');
INSERT INTO "EmergencyInfo" ("id", "contactName", "contactPhone", "medicalConditions", "userId") VALUES ('9a8e71f8-311b-4d85-85d2-cdd2bd4a28d2', 'Bob Brown', '5558765', 'Asthma', 'a186c1c3-0889-4a67-a7d1-d0f82ad948c0');
INSERT INTO "EmergencyInfo" ("id", "contactName", "contactPhone", "medicalConditions", "userId") VALUES ('4778e388-319e-44ec-a211-4c8727fdf9f4', 'Charlie Davis', '5554321', 'Allergies', '246f0bf9-cbc9-4b76-bd4e-a920350c9993');
INSERT INTO "EmergencyInfo" ("id", "contactName", "contactPhone", "medicalConditions", "userId") VALUES ('0f0f587f-724a-43b6-a2bb-4d4d7664b7fa', 'Charlie Davis', '5555678', 'Allergies', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "EmergencyInfo" ("id", "contactName", "contactPhone", "medicalConditions", "userId") VALUES ('cc2d23b0-caa5-43f8-9c68-60501e719669', 'Jane Smith', '5554321', 'Allergies', 'efdfd3fd-2d25-4e39-b053-8e9915e96ff9');
INSERT INTO "EmergencyInfo" ("id", "contactName", "contactPhone", "medicalConditions", "userId") VALUES ('fb5d6ede-185e-49b2-86c6-0b7c0c08be87', 'John Doe', '5554321', 'None', '9da0ca7c-bd7f-4df3-a708-0e8c0f86aff3');
INSERT INTO "EmergencyInfo" ("id", "contactName", "contactPhone", "medicalConditions", "userId") VALUES ('0711c0f7-029b-4791-9efb-6d606328a396', 'Alice Johnson', '5556789', 'Hypertension', '9da0ca7c-bd7f-4df3-a708-0e8c0f86aff3');
INSERT INTO "EmergencyInfo" ("id", "contactName", "contactPhone", "medicalConditions", "userId") VALUES ('d1066946-ced2-4e0a-9bd0-336ab43125ce', 'Jane Smith', '5556789', 'Diabetes', 'b4781f0f-f384-42f8-9d63-9228a73ba158');

INSERT INTO "NeedWant" ("id", "description", "type", "userId") VALUES ('9d461295-bfb2-4df2-8dc8-e200f9f47a91', 'Giving away gently used clothes', 'Need', 'a186c1c3-0889-4a67-a7d1-d0f82ad948c0');
INSERT INTO "NeedWant" ("id", "description", "type", "userId") VALUES ('3233272a-ea8b-47b7-9e47-41932eb54c4e', 'Need a ride to the airport', 'Need', '2baccd91-2dd8-49e8-b440-28bd8beaa8a0');
INSERT INTO "NeedWant" ("id", "description", "type", "userId") VALUES ('7aae5d0e-1433-4220-bba8-06a4d36e818d', 'Need a ride to the airport', 'Offering', 'ad799a70-a04b-415d-8054-0a16311eb797');
INSERT INTO "NeedWant" ("id", "description", "type", "userId") VALUES ('3d5ed05b-6e77-4671-9fb4-88f691bba346', 'Seeking volunteers for community cleanup', 'Offering', '246f0bf9-cbc9-4b76-bd4e-a920350c9993');
INSERT INTO "NeedWant" ("id", "description", "type", "userId") VALUES ('668fcf66-11bc-4b9e-af48-481371f1bc79', 'Seeking volunteers for community cleanup', 'Offering', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "NeedWant" ("id", "description", "type", "userId") VALUES ('5f67e60f-56d4-4be3-9309-596c09f83ef7', 'Need a ride to the airport', 'Need', '246f0bf9-cbc9-4b76-bd4e-a920350c9993');
INSERT INTO "NeedWant" ("id", "description", "type", "userId") VALUES ('541bdfa6-d51d-49c8-9f50-0d4eb31664f0', 'Need a ride to the airport', 'Need', '58efcd05-ab03-4dbd-bf02-8f01dadc2492');
INSERT INTO "NeedWant" ("id", "description", "type", "userId") VALUES ('868195e8-14d6-4b70-a7ef-b7d32754e764', 'Need a ride to the airport', 'Offering', '58efcd05-ab03-4dbd-bf02-8f01dadc2492');
INSERT INTO "NeedWant" ("id", "description", "type", "userId") VALUES ('cf599240-1513-4c47-83b5-f862ef948401', 'Looking for a babysitter for weekends', 'Offering', '2baccd91-2dd8-49e8-b440-28bd8beaa8a0');
INSERT INTO "NeedWant" ("id", "description", "type", "userId") VALUES ('0b3a2053-6a9c-40bb-a371-e19c1e2fffc3', 'Seeking volunteers for community cleanup', 'Want', 'efdfd3fd-2d25-4e39-b053-8e9915e96ff9');

INSERT INTO "Interest" ("id", "description", "userId") VALUES ('a5a11103-53fe-4bee-a3f7-fe1370112c93', 'ventito apto currus', '246f0bf9-cbc9-4b76-bd4e-a920350c9993');
INSERT INTO "Interest" ("id", "description", "userId") VALUES ('ba5f5d56-a8df-4971-8278-dd0a2ba422ff', 'alias', '246f0bf9-cbc9-4b76-bd4e-a920350c9993');
INSERT INTO "Interest" ("id", "description", "userId") VALUES ('38a9293f-0110-4a3d-ab5b-3772972b5404', 'cruciamentum vesica', '20a4eeeb-639c-43f5-851e-ef3a7f78ba63');
INSERT INTO "Interest" ("id", "description", "userId") VALUES ('4d7b147b-e5f6-45a1-986d-5f2475d3b963', 'combibo illum', '9da0ca7c-bd7f-4df3-a708-0e8c0f86aff3');
INSERT INTO "Interest" ("id", "description", "userId") VALUES ('b7f94ef5-43e3-43cc-b209-807a862b2790', 'absconditus', 'efdfd3fd-2d25-4e39-b053-8e9915e96ff9');
INSERT INTO "Interest" ("id", "description", "userId") VALUES ('986ed146-9f7e-45c8-8dcd-fb714abb8363', 'ceno', 'efdfd3fd-2d25-4e39-b053-8e9915e96ff9');
INSERT INTO "Interest" ("id", "description", "userId") VALUES ('f8c70297-ea31-44ca-914e-bce0ce92020d', 'clam absum', 'ad799a70-a04b-415d-8054-0a16311eb797');
INSERT INTO "Interest" ("id", "description", "userId") VALUES ('5bbe622e-0929-4644-a7ff-eaff7e6c9b8a', 'eos expedita', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Interest" ("id", "description", "userId") VALUES ('1accd229-1102-4f74-8e9e-6d76e3e2c5d1', 'vomica', 'ad799a70-a04b-415d-8054-0a16311eb797');
INSERT INTO "Interest" ("id", "description", "userId") VALUES ('327d39f5-8efc-4809-a121-26003aec5ba2', 'reprehenderit quisquam conspergo', 'ad799a70-a04b-415d-8054-0a16311eb797');

INSERT INTO "Response" ("id", "responseText", "userId", "eventId") VALUES ('a161a764-3696-4112-b478-70d38c1f1af8', 'Im interested in helping out.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c1fe7558-63c5-40c3-8cd7-46479de52bf2');
INSERT INTO "Response" ("id", "responseText", "userId", "eventId") VALUES ('9c7308b9-04a3-485f-8986-599ad2ebfa0a', 'Im interested in helping out.', '2baccd91-2dd8-49e8-b440-28bd8beaa8a0', '5423bfb9-8727-4235-ba6e-626dbd880bf4');
INSERT INTO "Response" ("id", "responseText", "userId", "eventId") VALUES ('7aedc5ac-e49b-4b82-b840-39222e1210eb', 'Can you provide more details', '9da0ca7c-bd7f-4df3-a708-0e8c0f86aff3', '54f8095d-3a75-4b1e-a752-14b32cdae998');
INSERT INTO "Response" ("id", "responseText", "userId", "eventId") VALUES ('91c2c94a-3796-4e37-a151-c43b3f7dea25', 'Thank you for sharing this information.', '58efcd05-ab03-4dbd-bf02-8f01dadc2492', '5422004a-89e1-49a6-8466-669a6d9ed3f4');
INSERT INTO "Response" ("id", "responseText", "userId", "eventId") VALUES ('1f3e4935-4d81-430a-9bd3-d2858e6abd57', 'Is this still available', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '403cda0e-d8e7-47f2-8ef6-b634ff0da304');
INSERT INTO "Response" ("id", "responseText", "userId", "eventId") VALUES ('f154019e-5de8-496e-8982-2f1eea68f394', 'Can you provide more details', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '95c25153-410f-415a-97a9-7056e5f4bbcb');
INSERT INTO "Response" ("id", "responseText", "userId", "eventId") VALUES ('a7d30896-2469-40b9-95fe-999f10283b0e', 'Thank you for sharing this information.', 'efdfd3fd-2d25-4e39-b053-8e9915e96ff9', 'fb46f340-ad21-4a43-bcf5-3203c8f68d12');
INSERT INTO "Response" ("id", "responseText", "userId", "eventId") VALUES ('b206e460-c93c-4a90-9b4b-2a62715a8f83', 'Id love to join this event', '20a4eeeb-639c-43f5-851e-ef3a7f78ba63', '5423bfb9-8727-4235-ba6e-626dbd880bf4');
INSERT INTO "Response" ("id", "responseText", "userId", "eventId") VALUES ('cdb29ea6-9e09-475d-9772-91932b4e3f22', 'Im interested in helping out.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'd517449e-70bc-4372-b853-8cfcab9267ee');
INSERT INTO "Response" ("id", "responseText", "userId", "eventId") VALUES ('c4097620-fb6c-452e-9477-fa9472f3b2aa', 'Can you provide more details', '9da0ca7c-bd7f-4df3-a708-0e8c0f86aff3', '54f8095d-3a75-4b1e-a752-14b32cdae998');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
