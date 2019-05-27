class Payment < ApplicationRecord
  belongs_to :user, foreign_key: :sender_id
  belongs_to :teacher, foreign_key: :receiver_id
end

# belongs_to :sender, class_name: 'User', foreign_key: :sender_id
# belongs_to :receiver, class_name: 'User', foreign_key: :receiver_id
