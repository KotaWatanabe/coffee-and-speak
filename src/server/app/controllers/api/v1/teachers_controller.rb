class Api::V1::QuestionsController < ApplicationController
    before_action :authenticate_user!, only: [ :create, :destroy, :update ]
    before_action :find_teacher, only: [ :destroy, :show, :update ]
  
    def index
      teachers = Teacher.order(created_at: :desc)
  
      render(
        json: teachers,

        each_serializer: TeacherCollectionSerializer
      )
    end
  
    def show
      render(
        json: @teacher,

        include: [ :teacher, {reviews: [ :teacher ]} ]
        include: [ :teacher, {favourites: [ :teacher ]} ]
        include: [ :teacher, {availabilities: [ :teacher ]} ]
      )
    end
  
    def create
      teacher = Teacher.new teacher_params
      teacher.user = current_user
  
      teacher.save!
      render json: { status:201, id: question.id }
    end
  
    def update
      @teacher.update!(teacher_params)
      render json: { id: @teacher.id }
    end
  
    def destroy
      @teacher.destroy
      render json: { status: 200 }
    end
  
    private
    def find_teacher
      @teacher ||= Teacher.find params[:id]
    end
  
    def teacher_params
      params.require(:teacher).permit(:price, :description, :area)
    end
end
