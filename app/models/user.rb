# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  firstname       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
   validates :email, :session_token, uniqueness: true, presence: true
    validates :firstname, :password_digest, presence: true
    validates :password, length: {minimum: 6 }, allow_nil: true

    has_many :rides,
        class_name: :Ride,
        foreign_key: :owner_id

    has_many :bookings,
        class_name: :Booking,
        foreign_key: :rider_id

    has_many :reviews,
        foreign_key: :rider_id,
        class_name: :Review


    after_initialize :ensure_session_token

    attr_reader :password


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token!
        SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token!)
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= User.generate_session_token!
    end

end
