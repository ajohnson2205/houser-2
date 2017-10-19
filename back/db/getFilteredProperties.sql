SELECT
  *
FROM
  properties
LEFT JOIN
  users
    ON properties.user_id = users.user_id
WHERE
  users.user_id = 2
    AND
      properties.desired_rent <= 100